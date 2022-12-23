"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarSummonEventInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarSummonEventInfo", [
            { no: 11, name: "random_position", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "event_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "suit_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "event_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { randomPosition: 0, guid: 0, eventOverTime: 0, suitId: 0, avatarId: 0, eventId: 0 };
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
                case /* uint32 random_position */ 11:
                    message.randomPosition = reader.uint32();
                    break;
                case /* uint32 guid */ 5:
                    message.guid = reader.uint32();
                    break;
                case /* uint32 event_over_time */ 6:
                    message.eventOverTime = reader.uint32();
                    break;
                case /* uint32 suit_id */ 12:
                    message.suitId = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 8:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 event_id */ 10:
                    message.eventId = reader.uint32();
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
        /* uint32 random_position = 11; */
        if (message.randomPosition !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.randomPosition);
        /* uint32 guid = 5; */
        if (message.guid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.guid);
        /* uint32 event_over_time = 6; */
        if (message.eventOverTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.eventOverTime);
        /* uint32 suit_id = 12; */
        if (message.suitId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.suitId);
        /* uint32 avatar_id = 8; */
        if (message.avatarId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 event_id = 10; */
        if (message.eventId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.eventId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarSummonEventInfo
 */
exports.HomeAvatarSummonEventInfo = new HomeAvatarSummonEventInfo$Type();
