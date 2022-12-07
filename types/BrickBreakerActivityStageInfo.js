"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerActivityStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerActivityStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerActivityStageInfo", [
            { no: 3, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_ALOGIKNHEIM", kind: "scalar", jsonName: "Unk3300ALOGIKNHEIM", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "Unk3300_FFKIEDNGNGK", kind: "scalar", jsonName: "Unk3300FFKIEDNGNGK", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, unk3300ALOGIKNHEIM: false, unk3300FFKIEDNGNGK: false };
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
                case /* uint32 stage_id */ 3:
                    message.stageId = reader.uint32();
                    break;
                case /* bool Unk3300_ALOGIKNHEIM = 2 [json_name = "Unk3300ALOGIKNHEIM"];*/ 2:
                    message.unk3300ALOGIKNHEIM = reader.bool();
                    break;
                case /* bool Unk3300_FFKIEDNGNGK = 10 [json_name = "Unk3300FFKIEDNGNGK"];*/ 10:
                    message.unk3300FFKIEDNGNGK = reader.bool();
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
        /* uint32 stage_id = 3; */
        if (message.stageId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.stageId);
        /* bool Unk3300_ALOGIKNHEIM = 2 [json_name = "Unk3300ALOGIKNHEIM"]; */
        if (message.unk3300ALOGIKNHEIM !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.unk3300ALOGIKNHEIM);
        /* bool Unk3300_FFKIEDNGNGK = 10 [json_name = "Unk3300FFKIEDNGNGK"]; */
        if (message.unk3300FFKIEDNGNGK !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.unk3300FFKIEDNGNGK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerActivityStageInfo
 */
exports.BrickBreakerActivityStageInfo = new BrickBreakerActivityStageInfo$Type();
