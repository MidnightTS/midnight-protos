"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstableSprayLevelFinishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayLevelFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("InstableSprayLevelFinishNotify", [
            { no: 2, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_AMEBAPIPLGL", kind: "scalar", jsonName: "Unk3300AMEBAPIPLGL", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "Unk3300_DHKHBKLBIPA", kind: "scalar", jsonName: "Unk3300DHKHBKLBIPA", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { round: 0, levelId: 0, unk3300AMEBAPIPLGL: false, unk3300DHKHBKLBIPA: false, stageId: 0 };
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
                case /* uint32 round */ 2:
                    message.round = reader.uint32();
                    break;
                case /* uint32 level_id */ 15:
                    message.levelId = reader.uint32();
                    break;
                case /* bool Unk3300_AMEBAPIPLGL = 3 [json_name = "Unk3300AMEBAPIPLGL"];*/ 3:
                    message.unk3300AMEBAPIPLGL = reader.bool();
                    break;
                case /* bool Unk3300_DHKHBKLBIPA = 12 [json_name = "Unk3300DHKHBKLBIPA"];*/ 12:
                    message.unk3300DHKHBKLBIPA = reader.bool();
                    break;
                case /* uint32 stage_id */ 10:
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
        /* uint32 round = 2; */
        if (message.round !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.round);
        /* uint32 level_id = 15; */
        if (message.levelId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool Unk3300_AMEBAPIPLGL = 3 [json_name = "Unk3300AMEBAPIPLGL"]; */
        if (message.unk3300AMEBAPIPLGL !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.unk3300AMEBAPIPLGL);
        /* bool Unk3300_DHKHBKLBIPA = 12 [json_name = "Unk3300DHKHBKLBIPA"]; */
        if (message.unk3300DHKHBKLBIPA !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.unk3300DHKHBKLBIPA);
        /* uint32 stage_id = 10; */
        if (message.stageId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InstableSprayLevelFinishNotify
 */
exports.InstableSprayLevelFinishNotify = new InstableSprayLevelFinishNotify$Type();
