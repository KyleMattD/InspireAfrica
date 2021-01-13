export class Register{
    constructor(){}
    public Person_ID!: string;
    public User_Email!: string;
    public User_Password!: string;
    public Learner_Name!: string;
    public Learner_Surname!: string;
    public Learner_School!: string;
    public DocSrc!: string;
    public Learner_Grade!: string;
}

export class User{
    constructor(){}
    public Person_ID!: string;
    public User_Email!: string;
    public User_Type_ID!: string;
    public User_Name!: string;
    public User_Surname!: string;
}