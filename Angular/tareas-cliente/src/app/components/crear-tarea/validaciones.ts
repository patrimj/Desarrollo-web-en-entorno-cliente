export function validar( descripcion: string, dificultad: string, horas_previstas: number, horas_realizadas: number, porcentaje: number, completada: boolean): string {
    if (!descripcion || !dificultad || !horas_previstas || !horas_realizadas || !porcentaje ) {
        return 'complete todos los campos';
    }
    if (descripcion.length < 10) {
        return 'La descripcion debe tener al menos 10 caracteres';
    }
    // la dificultad la va a selccionar en un desplegable
    if (dificultad.length < 2) {
        return 'La dificultad debe ';
    }

    if (horas_previstas < 0) {
        return 'Las horas previstas deben ser mayor que 0';
    }
    if (horas_realizadas <= 0) {
        return 'Las horas realizadas deben ser mayor que 0';
    }
    if (porcentaje <= 0) {
        return 'El porcentaje debe ser mayor que 0';
    }
    if (!descripcion) {
        return 'Por favor, complete la descripcion';
    }
    if (!dificultad) {
        return 'Por favor, complete la dificultad';
    }
    if (!horas_previstas) {
        return 'Por favor, complete las horas previstas';
    }
    if (!horas_realizadas) {
        return 'Por favor, complete las horas realizadas';
    }
    if (!porcentaje) {
        return 'Por favor, complete el porcentaje';
    }


    return '';
}