"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarRewardEventInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarRewardEventInfo", [
            { no: 9, name: "random_position", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "suite_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "event_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { randomPosition: 0, suiteId: 0, guid: 0, eventId: 0, avatarId: 0 };
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
                case /* uint32 random_position */ 9:
                    message.randomPosition = reader.uint32();
                    break;
                case /* uint32 suite_id */ 11:
                    message.suiteId = reader.uint32();
                    break;
                case /* uint32 guid */ 6:
                    message.guid = reader.uint32();
                    break;
                case /* uint32 event_id */ 5:
                    message.eventId = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 7:
                    message.avatarId = reader.uint32();
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
        /* uint32 random_position = 9; */
        if (message.randomPosition !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.randomPosition);
        /* uint32 suite_id = 11; */
        if (message.suiteId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.suiteId);
        /* uint32 guid = 6; */
        if (message.guid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.guid);
        /* uint32 event_id = 5; */
        if (message.eventId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.eventId);
        /* uint32 avatar_id = 7; */
        if (message.avatarId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarRewardEventInfo
 */
exports.HomeAvatarRewardEventInfo = new HomeAvatarRewardEventInfo$Type();
