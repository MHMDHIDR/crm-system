import { relations, sql } from 'drizzle-orm'
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'

// Clients table
export const clients = sqliteTable('clients', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  employeeId: integer('employee_id').references(() => personalEmployeeInfo.id),
  clientName: text('client_name'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  nationality: text('nationality'),
  phoneNumber: integer('phone_number'),
  email: text('email'),
  jobTitle: text('job_title'),
  officeDiscoveryMethod: text('office_discovery_method'),
  customerCredentials: text('customer_credentials')
})

// Expenses table
export const expenses = sqliteTable('expenses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  amount: integer('amount').notNull(),
  expenseName: text('expense_name').notNull(),
  description: text('description'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
})

// Office Details table
export const officeDetails = sqliteTable('office_details', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  arOfficeName: text('ar_office_name'),
  enOfficeName: text('en_office_name'),
  arOfficeAddress: text('ar_office_address'),
  enOfficeAddress: text('en_office_address'),
  officePhone: text('office_phone'),
  officeEmail: text('office_email'),
  officeTaxNumber: text('office_tax_number')
})

// Personal Employee Info table
export const personalEmployeeInfo = sqliteTable('personal_employee_info', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  fullName: text('full_name'),
  nationality: text('nationality'),
  startWorkingDate: text('start_working_date'),
  finalWorkingDate: text('final_working_date'),
  contractEndDate: text('contract_end_date'),
  residencyEndDate: text('residency_end_date'),
  personalIdNumber: integer('personal_id_number'),
  passportIdNumber: text('passport_id_number'),
  salaryAmount: real('salary_amount'),
  comissionPercentage: integer('comission_percentage').default(0).notNull()
})

// System Employee Info table
export const systemEmployeeInfo = sqliteTable('system_employee_info', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  employeeId: integer('employee_id').references(() => personalEmployeeInfo.id),
  username: text('username'),
  password: text('password'),
  role: text('role').default('employee').notNull(),
  loginTime: text('login_time'),
  logoutTime: text('logout_time')
})

// Receipts table
export const receipts = sqliteTable('receipts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  serviceId: integer('service_id').references(() => services.id, { onDelete: 'cascade' }),
  clientId: integer('client_id').references(() => clients.id, { onDelete: 'cascade' }),
  employeeId: integer('employee_id').references(() => personalEmployeeInfo.id, {
    onDelete: 'cascade'
  }),
  servicePaidAmount: real('service_paid_amount'),
  serviceRemainingAmount: real('service_remaining_amount').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
})

// Services table
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  employeeId: integer('employee_id')
    .notNull()
    .references(() => personalEmployeeInfo.id, { onDelete: 'cascade' }),
  clientId: integer('client_id')
    .notNull()
    .references(() => clients.id, { onDelete: 'cascade' }),
  representativeId: integer('representative_id'),
  serviceName: text('service_name').notNull(),
  serviceTotalPrice: integer('service_total_price').notNull(),
  servicePaymentStatus: text('service_payment_status').default('unpaid').notNull(),
  serviceStatus: text('service_status').default('not-started').notNull(),
  createdAt: text('created_at').notNull(),
  endsAt: text('ends_at').notNull(),
  serviceDetails: text('service_details'),
  subServices: text('sub_services')
})

// Define relations
export const clientsRelations = relations(clients, ({ one }) => ({
  employee: one(personalEmployeeInfo, {
    fields: [clients.employeeId],
    references: [personalEmployeeInfo.id]
  })
}))

export const servicesRelations = relations(services, ({ one }) => ({
  employee: one(personalEmployeeInfo, {
    fields: [services.employeeId],
    references: [personalEmployeeInfo.id]
  }),
  client: one(clients, {
    fields: [services.clientId],
    references: [clients.id]
  })
}))

export const receiptsRelations = relations(receipts, ({ one }) => ({
  service: one(services, {
    fields: [receipts.serviceId],
    references: [services.id]
  }),
  client: one(clients, {
    fields: [receipts.clientId],
    references: [clients.id]
  }),
  employee: one(personalEmployeeInfo, {
    fields: [receipts.employeeId],
    references: [personalEmployeeInfo.id]
  })
}))

export const systemEmployeeInfoRelations = relations(systemEmployeeInfo, ({ one }) => ({
  employee: one(personalEmployeeInfo, {
    fields: [systemEmployeeInfo.employeeId],
    references: [personalEmployeeInfo.id]
  })
}))
