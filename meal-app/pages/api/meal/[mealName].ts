import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../src/db'

type Meal = {
  name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Meal>
) {
    const method = req.method
    const mealName = req.query.mealName?.toString()

    switch (method){
        case 'GET':
            const meal = await prisma.meal.findFirst({
                where: {
                    name: mealName
                },
                select: {
                    name: true
                }
            })
            res.status(200).json(meal || {name: 'Meal doesnt exist in my db'})
            break

        case 'DELETE':
            const deletedMeal = await prisma.meal.delete({
                where: {
                    name: mealName
                }
            })
            res.status(200).json(deletedMeal || {name: 'Meal could not be deleted'})
            break
        
        default:
            res.status(405).end()
    }

}
