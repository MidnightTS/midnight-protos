"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGBasicDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGBasicDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGBasicDataNotify", [
            { no: 6, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "level_reward_taken_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { level: 0, exp: 0, levelRewardTakenList: [] };
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
                case /* uint32 level */ 6:
                    message.level = reader.uint32();
                    break;
                case /* uint32 exp */ 4:
                    message.exp = reader.uint32();
                    break;
                case /* repeated uint32 level_reward_taken_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelRewardTakenList.push(reader.uint32());
                    else
                        message.levelRewardTakenList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 level = 6; */
        if (message.level !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.level);
        /* uint32 exp = 4; */
        if (message.exp !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.exp);
        /* repeated uint32 level_reward_taken_list = 14; */
        if (message.levelRewardTakenList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.levelRewardTakenList.length; i++)
                writer.uint32(message.levelRewardTakenList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGBasicDataNotify
 */
exports.GCGBasicDataNotify = new GCGBasicDataNotify$Type();
