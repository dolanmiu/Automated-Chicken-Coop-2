enum DoorState {
    Open = 1, Close = 0
}

export class State {
    private doorState: DoorState;

    constructor() {
        this.doorState = DoorState.Close;
    }

    public OpenDoor(): void {
        this.doorState = DoorState.Open;
    }

    public CloseDoor(): void {
        this.doorState = DoorState.Close;
    }

    public GetDoorBinary(): number {
        return this.doorState;
    }
}