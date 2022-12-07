"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryVintageHuntingSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageHuntingThirdStageSettleInfo_1 = require("./VintageHuntingThirdStageSettleInfo");
const VintageHuntingSecondStageSettleInfo_1 = require("./VintageHuntingSecondStageSettleInfo");
const VintageHuntingFirstStageSettleInfo_1 = require("./VintageHuntingFirstStageSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryVintageHuntingSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryVintageHuntingSettleNotify", [
            { no: 3, name: "has_new_watcher", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "Unk3300_EHGDIKOGLKL", kind: "scalar", jsonName: "Unk3300EHGDIKOGLKL", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_KOAKHMLFPGM", kind: "scalar", jsonName: "Unk3300KOAKHMLFPGM", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "first_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingFirstStageSettleInfo_1.VintageHuntingFirstStageSettleInfo },
            { no: 8, name: "second_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingSecondStageSettleInfo_1.VintageHuntingSecondStageSettleInfo },
            { no: 14, name: "third_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingThirdStageSettleInfo_1.VintageHuntingThirdStageSettleInfo }
        ]);
    }
    create(value) {
        const message = { hasNewWatcher: false, isNewRecord: false, unk3300EHGDIKOGLKL: 0, unk3300KOAKHMLFPGM: 0, stageId: 0, info: { oneofKind: undefined } };
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
                case /* bool has_new_watcher */ 3:
                    message.hasNewWatcher = reader.bool();
                    break;
                case /* bool is_new_record */ 13:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 Unk3300_EHGDIKOGLKL = 15 [json_name = "Unk3300EHGDIKOGLKL"];*/ 15:
                    message.unk3300EHGDIKOGLKL = reader.uint32();
                    break;
                case /* uint32 Unk3300_KOAKHMLFPGM = 6 [json_name = "Unk3300KOAKHMLFPGM"];*/ 6:
                    message.unk3300KOAKHMLFPGM = reader.uint32();
                    break;
                case /* uint32 stage_id */ 9:
                    message.stageId = reader.uint32();
                    break;
                case /* VintageHuntingFirstStageSettleInfo first_stage_info */ 7:
                    message.info = {
                        oneofKind: "firstStageInfo",
                        firstStageInfo: VintageHuntingFirstStageSettleInfo_1.VintageHuntingFirstStageSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.firstStageInfo)
                    };
                    break;
                case /* VintageHuntingSecondStageSettleInfo second_stage_info */ 8:
                    message.info = {
                        oneofKind: "secondStageInfo",
                        secondStageInfo: VintageHuntingSecondStageSettleInfo_1.VintageHuntingSecondStageSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.secondStageInfo)
                    };
                    break;
                case /* VintageHuntingThirdStageSettleInfo third_stage_info */ 14:
                    message.info = {
                        oneofKind: "thirdStageInfo",
                        thirdStageInfo: VintageHuntingThirdStageSettleInfo_1.VintageHuntingThirdStageSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.thirdStageInfo)
                    };
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
        /* bool has_new_watcher = 3; */
        if (message.hasNewWatcher !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.hasNewWatcher);
        /* bool is_new_record = 13; */
        if (message.isNewRecord !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 Unk3300_EHGDIKOGLKL = 15 [json_name = "Unk3300EHGDIKOGLKL"]; */
        if (message.unk3300EHGDIKOGLKL !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300EHGDIKOGLKL);
        /* uint32 Unk3300_KOAKHMLFPGM = 6 [json_name = "Unk3300KOAKHMLFPGM"]; */
        if (message.unk3300KOAKHMLFPGM !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300KOAKHMLFPGM);
        /* uint32 stage_id = 9; */
        if (message.stageId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.stageId);
        /* VintageHuntingFirstStageSettleInfo first_stage_info = 7; */
        if (message.info.oneofKind === "firstStageInfo")
            VintageHuntingFirstStageSettleInfo_1.VintageHuntingFirstStageSettleInfo.internalBinaryWrite(message.info.firstStageInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingSecondStageSettleInfo second_stage_info = 8; */
        if (message.info.oneofKind === "secondStageInfo")
            VintageHuntingSecondStageSettleInfo_1.VintageHuntingSecondStageSettleInfo.internalBinaryWrite(message.info.secondStageInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingThirdStageSettleInfo third_stage_info = 14; */
        if (message.info.oneofKind === "thirdStageInfo")
            VintageHuntingThirdStageSettleInfo_1.VintageHuntingThirdStageSettleInfo.internalBinaryWrite(message.info.thirdStageInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryVintageHuntingSettleNotify
 */
exports.SceneGalleryVintageHuntingSettleNotify = new SceneGalleryVintageHuntingSettleNotify$Type();
