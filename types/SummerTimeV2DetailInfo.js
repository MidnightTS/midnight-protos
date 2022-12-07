"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeV2DetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SummerTimeV2BoatStageInfo_1 = require("./SummerTimeV2BoatStageInfo");
const SummerTimeV2DungeonStageInfo_1 = require("./SummerTimeV2DungeonStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeV2DetailInfo", [
            { no: 14, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_BNNMNCKEHHO", kind: "scalar", jsonName: "Unk3300BNNMNCKEHHO", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeV2DungeonStageInfo_1.SummerTimeV2DungeonStageInfo },
            { no: 8, name: "Unk3300_JHBCHFHAGFO", kind: "scalar", jsonName: "Unk3300JHBCHFHAGFO", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "boat_stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeV2BoatStageInfo_1.SummerTimeV2BoatStageInfo }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, unk3300BNNMNCKEHHO: 0, dungeonStageInfoList: [], unk3300JHBCHFHAGFO: 0, boatStageInfoList: [] };
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
                case /* bool is_content_closed */ 14:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 Unk3300_BNNMNCKEHHO = 9 [json_name = "Unk3300BNNMNCKEHHO"];*/ 9:
                    message.unk3300BNNMNCKEHHO = reader.uint32();
                    break;
                case /* repeated SummerTimeV2DungeonStageInfo dungeon_stage_info_list */ 5:
                    message.dungeonStageInfoList.push(SummerTimeV2DungeonStageInfo_1.SummerTimeV2DungeonStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_JHBCHFHAGFO = 8 [json_name = "Unk3300JHBCHFHAGFO"];*/ 8:
                    message.unk3300JHBCHFHAGFO = reader.uint32();
                    break;
                case /* repeated SummerTimeV2BoatStageInfo boat_stage_info_list */ 3:
                    message.boatStageInfoList.push(SummerTimeV2BoatStageInfo_1.SummerTimeV2BoatStageInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_content_closed = 14; */
        if (message.isContentClosed !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 Unk3300_BNNMNCKEHHO = 9 [json_name = "Unk3300BNNMNCKEHHO"]; */
        if (message.unk3300BNNMNCKEHHO !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300BNNMNCKEHHO);
        /* repeated SummerTimeV2DungeonStageInfo dungeon_stage_info_list = 5; */
        for (let i = 0; i < message.dungeonStageInfoList.length; i++)
            SummerTimeV2DungeonStageInfo_1.SummerTimeV2DungeonStageInfo.internalBinaryWrite(message.dungeonStageInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_JHBCHFHAGFO = 8 [json_name = "Unk3300JHBCHFHAGFO"]; */
        if (message.unk3300JHBCHFHAGFO !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300JHBCHFHAGFO);
        /* repeated SummerTimeV2BoatStageInfo boat_stage_info_list = 3; */
        for (let i = 0; i < message.boatStageInfoList.length; i++)
            SummerTimeV2BoatStageInfo_1.SummerTimeV2BoatStageInfo.internalBinaryWrite(message.boatStageInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2DetailInfo
 */
exports.SummerTimeV2DetailInfo = new SummerTimeV2DetailInfo$Type();
