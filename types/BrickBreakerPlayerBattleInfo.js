"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerPlayerBattleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerPlayerBattleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerPlayerBattleInfo", [
            { no: 7, name: "is_ready", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "costume_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_changing", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isReady: false, costumeId: [], nickname: "", uid: 0, avatarId: [], isChanging: false, skillList: [] };
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
                case /* bool is_ready */ 7:
                    message.isReady = reader.bool();
                    break;
                case /* repeated uint32 costume_id */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costumeId.push(reader.uint32());
                    else
                        message.costumeId.push(reader.uint32());
                    break;
                case /* string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 13:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint32 avatar_id */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarId.push(reader.uint32());
                    else
                        message.avatarId.push(reader.uint32());
                    break;
                case /* bool is_changing */ 15:
                    message.isChanging = reader.bool();
                    break;
                case /* repeated uint32 skill_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillList.push(reader.uint32());
                    else
                        message.skillList.push(reader.uint32());
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
        /* bool is_ready = 7; */
        if (message.isReady !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isReady);
        /* repeated uint32 costume_id = 5; */
        if (message.costumeId.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costumeId.length; i++)
                writer.uint32(message.costumeId[i]);
            writer.join();
        }
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 13; */
        if (message.uid !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.uid);
        /* repeated uint32 avatar_id = 9; */
        if (message.avatarId.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarId.length; i++)
                writer.uint32(message.avatarId[i]);
            writer.join();
        }
        /* bool is_changing = 15; */
        if (message.isChanging !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isChanging);
        /* repeated uint32 skill_list = 3; */
        if (message.skillList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillList.length; i++)
                writer.uint32(message.skillList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerPlayerBattleInfo
 */
exports.BrickBreakerPlayerBattleInfo = new BrickBreakerPlayerBattleInfo$Type();
