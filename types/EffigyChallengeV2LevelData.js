"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyChallengeV2LevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2LevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyChallengeV2LevelData", [
            { no: 13, name: "Unk3300_PPOEMEILBIA", kind: "scalar", jsonName: "Unk3300PPOEMEILBIA", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_level_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KJEOADDMJMI", kind: "scalar", jsonName: "Unk3300KJEOADDMJMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_JMGACODMJLG", kind: "scalar", jsonName: "Unk3300JMGACODMJLG", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_IJAGOAKOABH", kind: "scalar", jsonName: "Unk3300IJAGOAKOABH", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300PPOEMEILBIA: 0, isLevelOpen: false, unk3300KJEOADDMJMI: 0, unk3300JMGACODMJLG: 0, unk3300IJAGOAKOABH: 0, levelId: 0 };
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
                case /* uint32 Unk3300_PPOEMEILBIA = 13 [json_name = "Unk3300PPOEMEILBIA"];*/ 13:
                    message.unk3300PPOEMEILBIA = reader.uint32();
                    break;
                case /* bool is_level_open */ 4:
                    message.isLevelOpen = reader.bool();
                    break;
                case /* uint32 Unk3300_KJEOADDMJMI = 9 [json_name = "Unk3300KJEOADDMJMI"];*/ 9:
                    message.unk3300KJEOADDMJMI = reader.uint32();
                    break;
                case /* uint32 Unk3300_JMGACODMJLG = 2 [json_name = "Unk3300JMGACODMJLG"];*/ 2:
                    message.unk3300JMGACODMJLG = reader.uint32();
                    break;
                case /* uint32 Unk3300_IJAGOAKOABH = 7 [json_name = "Unk3300IJAGOAKOABH"];*/ 7:
                    message.unk3300IJAGOAKOABH = reader.uint32();
                    break;
                case /* uint32 level_id */ 12:
                    message.levelId = reader.uint32();
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
        /* uint32 Unk3300_PPOEMEILBIA = 13 [json_name = "Unk3300PPOEMEILBIA"]; */
        if (message.unk3300PPOEMEILBIA !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300PPOEMEILBIA);
        /* bool is_level_open = 4; */
        if (message.isLevelOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isLevelOpen);
        /* uint32 Unk3300_KJEOADDMJMI = 9 [json_name = "Unk3300KJEOADDMJMI"]; */
        if (message.unk3300KJEOADDMJMI !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300KJEOADDMJMI);
        /* uint32 Unk3300_JMGACODMJLG = 2 [json_name = "Unk3300JMGACODMJLG"]; */
        if (message.unk3300JMGACODMJLG !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300JMGACODMJLG);
        /* uint32 Unk3300_IJAGOAKOABH = 7 [json_name = "Unk3300IJAGOAKOABH"]; */
        if (message.unk3300IJAGOAKOABH !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300IJAGOAKOABH);
        /* uint32 level_id = 12; */
        if (message.levelId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeV2LevelData
 */
exports.EffigyChallengeV2LevelData = new EffigyChallengeV2LevelData$Type();
