enum Proficiency {
  Junior = 'junior',
  Regular = 'regular',
  Expert = 'expert',
}

interface Candidate {
  firstName: string
  lastName: string
  age: number
  email: string
  mainLanguage: string
  proficiency: Proficiency
  hobbies: string[]
}

const candidate: Candidate = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  email: 'john.doe@com',
  mainLanguage: 'C#',
  proficiency: Proficiency.Expert,
  hobbies: ['sport', 'netflix', 'books'],
}

interface Validator {
  isValid(candidate: Candidate): boolean
}

class EmailValidator implements Validator {
  isValid({ email }: Candidate): boolean {
    return email != null
  }
}

class ProficiencyValidator implements Validator {
  isValid({ proficiency }: Candidate): boolean {
    return (
      proficiency !== Proficiency.Junior && proficiency !== Proficiency.Regular
    )
  }
}

function getName(candidate: Candidate): string {
  return `${candidate.firstName} ${candidate.lastName}`
}

function processCandidate(candidate: Candidate) {
  const fullName = getName(candidate)
  console.log('Hello' + fullName + '!')
  const validators = [new EmailValidator(), new ProficiencyValidator()]

  const isValid = validators.every((validator) => validator.isValid(candidate))

  if (!isValid) {
    return
  }
}
