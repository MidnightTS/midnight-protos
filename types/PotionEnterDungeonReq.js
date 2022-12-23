"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PotionAvatarInfo_1 = require("./PotionAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PotionEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PotionEnterDungeonReq", [
            { no: 6, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PotionAvatarInfo_1.PotionAvatarInfo },
            { no: 10, name: "mode_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, avatarInfoList: [], modeId: 0, buffIdList: [], stageId: 0 };
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
                case /* uint32 level_id */ 6:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated PotionAvatarInfo avatar_info_list */ 15:
                    message.avatarInfoList.push(PotionAvatarInfo_1.PotionAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 mode_id */ 10:
                    message.modeId = reader.uint32();
                    break;
                case /* repeated uint32 buff_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* uint32 stage_id */ 2:
                    message.stageId = reader.uint32();
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
        /* uint32 level_id = 6; */
        if (message.levelId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.levelId);
        /* repeated PotionAvatarInfo avatar_info_list = 15; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            PotionAvatarInfo_1.PotionAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 mode_id = 10; */
        if (message.modeId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.modeId);
        /* repeated uint32 buff_id_list = 9; */
        if (message.buffIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        /* uint32 stage_id = 2; */
        if (message.stageId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PotionEnterDungeonReq
 */
exports.PotionEnterDungeonReq = new PotionEnterDungeonReq$Type();
