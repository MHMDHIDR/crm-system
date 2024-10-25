export type BlockProps = {
  href: string
  blockLabel: string
  blockDescription: string
  blockIcon: React.ReactNode
  className?: string
  children?: React.ReactNode | string
}

export type EmployeeRequestBody = {
  username: string
  password: string
  role: string
  fullName: string
  nationality: string
  startWorkingDate: string
  finalWorkingDate: string
  contractEndDate: string
  residencyEndDate: string
  personalIdNumber: string
  passportIdNumber: string
  salaryAmount: number
  comissionPercentage: number
}
