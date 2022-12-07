"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharAmusementInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CharAmusementAvatarInfo_1 = require("./CharAmusementAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CharAmusementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CharAmusementInfo", [
            { no: 12, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "total_cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "preview_stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CharAmusementAvatarInfo_1.CharAmusementAvatarInfo },
            { no: 4, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, totalCostTime: 0, previewStageIndex: 0, avatarInfoList: [], stageId: 0 };
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
                case /* uint32 level_id */ 12:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 total_cost_time */ 2:
                    message.totalCostTime = reader.uint32();
                    break;
                case /* uint32 preview_stage_index */ 1:
                    message.previewStageIndex = reader.uint32();
                    break;
                case /* repeated CharAmusementAvatarInfo avatar_info_list */ 5:
                    message.avatarInfoList.push(CharAmusementAvatarInfo_1.CharAmusementAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 stage_id */ 4:
                    message.stageId = reader.uint32();
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
        /* uint32 level_id = 12; */
        if (message.levelId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 total_cost_time = 2; */
        if (message.totalCostTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.totalCostTime);
        /* uint32 preview_stage_index = 1; */
        if (message.previewStageIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.previewStageIndex);
        /* repeated CharAmusementAvatarInfo avatar_info_list = 5; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            CharAmusementAvatarInfo_1.CharAmusementAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 stage_id = 4; */
        if (message.stageId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CharAmusementInfo
 */
exports.CharAmusementInfo = new CharAmusementInfo$Type();
