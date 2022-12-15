import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../src/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const method = req.method

    switch (method) {
        case 'GET':
            const meals = await prisma.meal.findMany({
                select: {
                    name: true
                }
            })
            res.status(200).json(meals)
            break

        case 'POST':
            const mealToPost: string = req.body.name

            const postedMeal = await prisma.meal.create({
                data: {
                    name: mealToPost
                }
            })
            res.status(200).json(postedMeal)
            break
    }
}
