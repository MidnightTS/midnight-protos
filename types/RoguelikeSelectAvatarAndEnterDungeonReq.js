"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeSelectAvatarAndEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeSelectAvatarAndEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeSelectAvatarAndEnterDungeonReq", [
            { no: 1, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "onstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "backstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, onstageAvatarGuidList: [], backstageAvatarGuidList: [] };
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
                case /* uint32 stage_id */ 1:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated uint64 onstage_avatar_guid_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 backstage_avatar_guid_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
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
        /* uint32 stage_id = 1; */
        if (message.stageId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.stageId);
        /* repeated uint64 onstage_avatar_guid_list = 12; */
        if (message.onstageAvatarGuidList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.onstageAvatarGuidList.length; i++)
                writer.uint64(message.onstageAvatarGuidList[i]);
            writer.join();
        }
        /* repeated uint64 backstage_avatar_guid_list = 4; */
        if (message.backstageAvatarGuidList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backstageAvatarGuidList.length; i++)
                writer.uint64(message.backstageAvatarGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeSelectAvatarAndEnterDungeonReq
 */
exports.RoguelikeSelectAvatarAndEnterDungeonReq = new RoguelikeSelectAvatarAndEnterDungeonReq$Type();
