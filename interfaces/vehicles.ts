export interface RootObject {
    vehicles: Vehicle[];
}

export interface Vehicle {
    type:                Type;
    name:                string;
    fuel?:               string;
    passenger_capacity?: number;
    speed?:              string;
    color?:              string;
    special_features:    string[];
    image:               string;
    description:         string;
    crew?:               number;
    weapons?:            string[];
    energy_source?:      string;
    flight_time?:        string;
    max_range?:          string;
}

export type Type = "zeppelin" | "fighter" | "car" | "drone" | "bike" | "step";
