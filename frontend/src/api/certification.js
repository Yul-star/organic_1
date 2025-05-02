import axios from '@/utils/axios'

export const fetchCertification = async (number) => {
    try {
        const response = await axios.get(`/certifications`, {
            params: { number }
        })
        return response.data
    } catch (error) {
        console.error('인증번호 조회 실패:', error)
        throw error
    }
}
