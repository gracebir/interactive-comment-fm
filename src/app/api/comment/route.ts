import data from '@/util/data.json'
export async function GET(request: Request){
    const comment = data
    return new Response(JSON.stringify(comment), {
        headers: {
            "Content-Type":"application/json"
        }
    })
}