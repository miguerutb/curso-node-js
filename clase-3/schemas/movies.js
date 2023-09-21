const z = require('zod')

const movieSchema = z.object({
        title: z.string({
            invalid_type_error: 'El titulo debe ser un string',
            required_error: 'El titulo es requerido',
        }
        ).min(1),

        year: z.number().int().min(1900).max(new Date().getFullYear()+1),
        director: z.string(),
        rate: z.number().min(0).max(10).default(5),
        poster: z.string().url(),
        genre: z.array(z.enum(['Action','Adventure', 'Comedy', 'Crime', 'Drama', 'Terror',
                                'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller']))
    })

function validateMovie(movie) {
    return movieSchema.safeParse(movie)
}

function validatePartialMovie(movie) {
    return movieSchema.partial().safeParse(movie)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}