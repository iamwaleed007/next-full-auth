"use client"

import { newVerification } from "@/actions/newVerification"
import CardWrapper from "@/components/auth/CardWrapper"
import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const params = useSearchParams()
    const token = params.get("token")

    const onSubmit = useCallback(() => {
        if (success && error) return

        if (!token) {
            setError("Missing token")
            return
        }
        newVerification(token).then((data) => {
            setSuccess(data.success)
            setError(data.error)
        }).catch(() => {
            setError("Something went wrong.")
        })
    }, [token, success, error])

    useEffect(() => {
        onSubmit()
    }, [])


    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            footerTextLabel="Back to login"
            footerTextHref="/auth/login"
        >
            <div className="flex items-center flex-col w-full justify-center">
                {
                    !success && !error && <Loader2 className="animate-spin w-10 h-10" />
                }
                <FormError message={error} />
                {
                    !success && <FormSuccess message={success} />
                }
            </div>
        </CardWrapper>
    )
}

export default NewVerificationForm