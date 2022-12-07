"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryVintageHuntingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageHuntingThirdStageInfo_1 = require("./VintageHuntingThirdStageInfo");
const VintageHuntingSecondStageInfo_1 = require("./VintageHuntingSecondStageInfo");
const VintageHuntingFirstStageInfo_1 = require("./VintageHuntingFirstStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryVintageHuntingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryVintageHuntingInfo", [
            { no: 9, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "first_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingFirstStageInfo_1.VintageHuntingFirstStageInfo },
            { no: 14, name: "second_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingSecondStageInfo_1.VintageHuntingSecondStageInfo },
            { no: 8, name: "third_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingThirdStageInfo_1.VintageHuntingThirdStageInfo }
        ]);
    }
    create(value) {
        const message = { stageId: 0, info: { oneofKind: undefined } };
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
                case /* uint32 stage_id */ 9:
                    message.stageId = reader.uint32();
                    break;
                case /* VintageHuntingFirstStageInfo first_stage_info */ 5:
                    message.info = {
                        oneofKind: "firstStageInfo",
                        firstStageInfo: VintageHuntingFirstStageInfo_1.VintageHuntingFirstStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.firstStageInfo)
                    };
                    break;
                case /* VintageHuntingSecondStageInfo second_stage_info */ 14:
                    message.info = {
                        oneofKind: "secondStageInfo",
                        secondStageInfo: VintageHuntingSecondStageInfo_1.VintageHuntingSecondStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.secondStageInfo)
                    };
                    break;
                case /* VintageHuntingThirdStageInfo third_stage_info */ 8:
                    message.info = {
                        oneofKind: "thirdStageInfo",
                        thirdStageInfo: VintageHuntingThirdStageInfo_1.VintageHuntingThirdStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.thirdStageInfo)
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
        /* uint32 stage_id = 9; */
        if (message.stageId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.stageId);
        /* VintageHuntingFirstStageInfo first_stage_info = 5; */
        if (message.info.oneofKind === "firstStageInfo")
            VintageHuntingFirstStageInfo_1.VintageHuntingFirstStageInfo.internalBinaryWrite(message.info.firstStageInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingSecondStageInfo second_stage_info = 14; */
        if (message.info.oneofKind === "secondStageInfo")
            VintageHuntingSecondStageInfo_1.VintageHuntingSecondStageInfo.internalBinaryWrite(message.info.secondStageInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingThirdStageInfo third_stage_info = 8; */
        if (message.info.oneofKind === "thirdStageInfo")
            VintageHuntingThirdStageInfo_1.VintageHuntingThirdStageInfo.internalBinaryWrite(message.info.thirdStageInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryVintageHuntingInfo
 */
exports.SceneGalleryVintageHuntingInfo = new SceneGalleryVintageHuntingInfo$Type();
