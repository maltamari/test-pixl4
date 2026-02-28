import BrandSection from '@/components/Hero/HeroCTA'
import Creative from '@/components/services/creative'
import { SERVICE_ITEMS } from '@/lib/data/Services'
import React from 'react'

function page() {
  return (
    <>
    <Creative HEADING_ITEMS={SERVICE_ITEMS} sideClass='py-30'/>
    <BrandSection/>
    </>
  )
}

export default page