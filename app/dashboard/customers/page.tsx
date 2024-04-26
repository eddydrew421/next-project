import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Customers',
  description: 'Your customer list',
};

export default async function Page({
  customerId,
} : {
  customerId: string,
  customerAlt: string,
  customerEmail: string,
}) {
  const customerList = await fetchCustomers();
    return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <CustomersTable 
            customers={customerList}
            />
        </div>
    </main>
    )
  }