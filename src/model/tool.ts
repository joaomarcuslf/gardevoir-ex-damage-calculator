export type Tool = {
    name: string;
    bonus: number;
    requirement: {
        rulebox: boolean;
        stages: boolean[];
    };
};