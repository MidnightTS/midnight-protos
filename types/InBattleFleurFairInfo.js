"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleFleurFairInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleFleurFairInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleFleurFairInfo", [
            { no: 7, name: "gallery_stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "preview_display_duration", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NNPMBFGJELL", kind: "scalar", jsonName: "Unk3300NNPMBFGJELL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "preview_stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_IJBKKLGOMIE", kind: "scalar", jsonName: "Unk3300IJBKKLGOMIE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryStageIndex: 0, previewDisplayDuration: 0, unk3300NNPMBFGJELL: [], previewStageIndex: 0, unk3300IJBKKLGOMIE: [] };
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
                case /* uint32 gallery_stage_index */ 7:
                    message.galleryStageIndex = reader.uint32();
                    break;
                case /* uint32 preview_display_duration */ 11:
                    message.previewDisplayDuration = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_NNPMBFGJELL = 15 [json_name = "Unk3300NNPMBFGJELL"];*/ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300NNPMBFGJELL.push(reader.uint32());
                    else
                        message.unk3300NNPMBFGJELL.push(reader.uint32());
                    break;
                case /* uint32 preview_stage_index */ 9:
                    message.previewStageIndex = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_IJBKKLGOMIE = 14 [json_name = "Unk3300IJBKKLGOMIE"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IJBKKLGOMIE.push(reader.uint32());
                    else
                        message.unk3300IJBKKLGOMIE.push(reader.uint32());
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
        /* uint32 gallery_stage_index = 7; */
        if (message.galleryStageIndex !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.galleryStageIndex);
        /* uint32 preview_display_duration = 11; */
        if (message.previewDisplayDuration !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.previewDisplayDuration);
        /* repeated uint32 Unk3300_NNPMBFGJELL = 15 [json_name = "Unk3300NNPMBFGJELL"]; */
        if (message.unk3300NNPMBFGJELL.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300NNPMBFGJELL.length; i++)
                writer.uint32(message.unk3300NNPMBFGJELL[i]);
            writer.join();
        }
        /* uint32 preview_stage_index = 9; */
        if (message.previewStageIndex !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.previewStageIndex);
        /* repeated uint32 Unk3300_IJBKKLGOMIE = 14 [json_name = "Unk3300IJBKKLGOMIE"]; */
        if (message.unk3300IJBKKLGOMIE.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IJBKKLGOMIE.length; i++)
                writer.uint32(message.unk3300IJBKKLGOMIE[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleFleurFairInfo
 */
exports.InBattleFleurFairInfo = new InBattleFleurFairInfo$Type();
