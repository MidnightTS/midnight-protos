"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartRogueDiaryRoomReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StartRogueDiaryRoomReq$Type extends runtime_5.MessageType {
    constructor() {
        super("StartRogueDiaryRoomReq", [
            { no: 10, name: "is_select_hard", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "room_difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSelectHard: false, roomDifficulty: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_select_hard */ 10:
                    message.isSelectHard = reader.bool();
                    break;
                case /* uint32 room_difficulty */ 13:
                    message.roomDifficulty = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_select_hard = 10; */
        if (message.isSelectHard !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isSelectHard);
        /* uint32 room_difficulty = 13; */
        if (message.roomDifficulty !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.roomDifficulty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartRogueDiaryRoomReq
 */
exports.StartRogueDiaryRoomReq = new StartRogueDiaryRoomReq$Type();
