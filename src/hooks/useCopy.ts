import { useState, useEffect } from "react";
import { copyToClipboard } from "../utils/copy";

const useCopy = () => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        let timeout: any;

        if (copied) {
            timeout = setTimeout(() => {
                setCopied(false)
            }, 2000);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [copied])

    const copyText = (text: string) => {
        copyToClipboard(text)
        setCopied(true);
    }

    return {
        copied, copyText
    }
}

export default useCopy;