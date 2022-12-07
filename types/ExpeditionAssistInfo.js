"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpeditionAssistInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionAssistInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ExpeditionAssistInfo", [
            { no: 1, name: "target_nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "assist_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { targetNickName: "", costumeId: 0, assistTime: 0, avatarId: 0, onlineId: "" };
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
                case /* string target_nick_name */ 1:
                    message.targetNickName = reader.string();
                    break;
                case /* uint32 costume_id */ 7:
                    message.costumeId = reader.uint32();
                    break;
                case /* uint32 assist_time */ 12:
                    message.assistTime = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 5:
                    message.avatarId = reader.uint32();
                    break;
                case /* string online_id */ 13:
                    message.onlineId = reader.string();
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
        /* string target_nick_name = 1; */
        if (message.targetNickName !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.targetNickName);
        /* uint32 costume_id = 7; */
        if (message.costumeId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.costumeId);
        /* uint32 assist_time = 12; */
        if (message.assistTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.assistTime);
        /* uint32 avatar_id = 5; */
        if (message.avatarId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* string online_id = 13; */
        if (message.onlineId !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionAssistInfo
 */
exports.ExpeditionAssistInfo = new ExpeditionAssistInfo$Type();
