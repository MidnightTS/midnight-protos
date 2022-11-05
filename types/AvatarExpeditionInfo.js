"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarExpeditionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExpeditionState_1 = require("./AvatarExpeditionState");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionInfo", [
            { no: 1, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.AvatarExpeditionState", AvatarExpeditionState_1.AvatarExpeditionState] },
            { no: 2, name: "exp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "hour_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "shorten_ratio", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional com.midnights.game.AvatarExpeditionState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 exp_id */ 2:
                    message.expId = reader.uint32();
                    break;
                case /* optional uint32 hour_time */ 3:
                    message.hourTime = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 4:
                    message.startTime = reader.uint32();
                    break;
                case /* optional float shorten_ratio */ 5:
                    message.shortenRatio = reader.float();
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
        /* optional com.midnights.game.AvatarExpeditionState state = 1; */
        if (message.state !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.state);
        /* optional uint32 exp_id = 2; */
        if (message.expId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.expId);
        /* optional uint32 hour_time = 3; */
        if (message.hourTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.hourTime);
        /* optional uint32 start_time = 4; */
        if (message.startTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.startTime);
        /* optional float shorten_ratio = 5; */
        if (message.shortenRatio !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.shortenRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionInfo
 */
exports.AvatarExpeditionInfo = new AvatarExpeditionInfo$Type();
