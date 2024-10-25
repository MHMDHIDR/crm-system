'use server'

import { z } from 'zod'
import { db } from '@/db'
import { personalEmployeeInfo, systemEmployeeInfo } from '@/db/schema'
import { EmployeeRequestBody } from '@/types'
import { hash } from 'crypto'
import { employeeSchema } from '@/schemas/employee'

export async function createEmployee(formData: FormData) {
  const rawFormData = {
    username: (formData.get('username') as string) || '',
    password: (formData.get('password') as string) || '',
    role: (formData.get('role') as string) || '',
    fullName: (formData.get('fullName') as string) || '',
    nationality: (formData.get('nationality') as string) || '',
    startWorkingDate: (formData.get('startWorkingDate') as string) || '',
    finalWorkingDate: (formData.get('finalWorkingDate') as string) || '',
    contractEndDate: (formData.get('contractEndDate') as string) || '',
    residencyEndDate: (formData.get('residencyEndDate') as string) || '',
    personalIdNumber: (formData.get('personalIdNumber') as string) || '',
    passportIdNumber: (formData.get('passportIdNumber') as string) || '',
    salaryAmount: Number(formData.get('salaryAmount')) || 0,
    comissionPercentage: Number(formData.get('comissionPercentage')) || 0
  } satisfies EmployeeRequestBody

  try {
    // Validate the form data
    const validatedData = employeeSchema.parse(rawFormData)

    // Hash the password
    const hashedPassword = hash('sha256', validatedData.password)

    // Start a transaction to ensure both inserts succeed or fail together
    const result = await db.transaction(async tx => {
      // Insert personal employee info first
      const [personalInfo] = await tx
        .insert(personalEmployeeInfo)
        .values({
          fullName: validatedData.fullName,
          nationality: validatedData.nationality,
          startWorkingDate: validatedData.startWorkingDate,
          finalWorkingDate: validatedData.finalWorkingDate || null,
          contractEndDate: validatedData.contractEndDate || null,
          residencyEndDate: validatedData.residencyEndDate || null,
          personalIdNumber: validatedData.personalIdNumber,
          passportIdNumber: validatedData.passportIdNumber,
          salaryAmount: validatedData.salaryAmount,
          comissionPercentage: validatedData.comissionPercentage
        })
        .returning()

      // Insert system employee info with reference to personal info
      const [systemInfo] = await tx
        .insert(systemEmployeeInfo)
        .values({
          employeeId: personalInfo.id,
          username: validatedData.username,
          password: hashedPassword,
          role: validatedData.role
        })
        .returning()

      return { personalInfo, systemInfo }
    })

    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      }
    }

    console.error('Employee creation error:', error)
    return {
      success: false,
      errors: [{ message: 'Failed to create employee. Please try again.' }]
    }
  }
}
