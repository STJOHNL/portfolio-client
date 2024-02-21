import { toast } from 'react-hot-toast'
import { useApi } from './useApi'

export const useContact = () => {
    const { post } = useApi()

    const createContact = async (formData) => {
        try {
            const data = await post('/contact', formData)
            toast.success('Message sent')
            return data
        } catch (error) {
            toast.error('Error sending message')
            console.log(error)
        }
    }

    return {
        createContact
    }
}