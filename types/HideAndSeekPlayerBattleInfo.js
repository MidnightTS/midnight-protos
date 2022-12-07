"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekPlayerBattleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerBattleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HideAndSeekPlayerBattleInfo", [
            { no: 12, name: "is_ready", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isReady: false, skillList: [], avatarId: 0, costumeId: 0 };
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
                case /* bool is_ready */ 12:
                    message.isReady = reader.bool();
                    break;
                case /* repeated uint32 skill_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillList.push(reader.uint32());
                    else
                        message.skillList.push(reader.uint32());
                    break;
                case /* uint32 avatar_id */ 15:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 costume_id */ 4:
                    message.costumeId = reader.uint32();
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
        /* bool is_ready = 12; */
        if (message.isReady !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isReady);
        /* repeated uint32 skill_list = 11; */
        if (message.skillList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillList.length; i++)
                writer.uint32(message.skillList[i]);
            writer.join();
        }
        /* uint32 avatar_id = 15; */
        if (message.avatarId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* uint32 costume_id = 4; */
        if (message.costumeId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekPlayerBattleInfo
 */
exports.HideAndSeekPlayerBattleInfo = new HideAndSeekPlayerBattleInfo$Type();
