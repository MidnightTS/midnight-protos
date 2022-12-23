"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarSummonEventReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarSummonEventReq", [
            { no: 11, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "suit_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarId: 0, suitId: 0, guid: 0 };
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
                case /* uint32 avatar_id */ 11:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 suit_id */ 14:
                    message.suitId = reader.uint32();
                    break;
                case /* uint32 guid */ 15:
                    message.guid = reader.uint32();
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
        /* uint32 avatar_id = 11; */
        if (message.avatarId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 suit_id = 14; */
        if (message.suitId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.suitId);
        /* uint32 guid = 15; */
        if (message.guid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarSummonEventReq
 */
exports.HomeAvatarSummonEventReq = new HomeAvatarSummonEventReq$Type();
