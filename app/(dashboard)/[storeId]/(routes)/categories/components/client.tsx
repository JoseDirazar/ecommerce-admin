'use client'
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { CategoryColumn, columns } from "./colums"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface CategoryClientProps {
    data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()

    return (
        <>
        <div className="flex items.center justify-between" >
            <Heading
            title={`Categories (${data.length})`}
            description='Manage categories for your store'
            />
            <Button onClick={() => router.push(`/${params.storeId}/categories/new`)} >
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="API" description="API cells for Categories" />
        <Separator />
        <ApiList entityName="categories" entityIdName="categoriyId" />
        </> 
    )
}