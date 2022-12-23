"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampContributeItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampContributeItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SeaLampContributeItemRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "Unk3300_AIINHBHNHOI", kind: "scalar", jsonName: "Unk3300AIINHBHNHOI", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "add_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_LPHALOGLGAL", kind: "scalar", jsonName: "Unk3300LPHALOGLGAL", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300AIINHBHNHOI: 0, addProgress: 0, unk3300LPHALOGLGAL: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_AIINHBHNHOI = 11 [json_name = "Unk3300AIINHBHNHOI"];*/ 11:
                    message.unk3300AIINHBHNHOI = reader.uint32();
                    break;
                case /* uint32 add_progress */ 5:
                    message.addProgress = reader.uint32();
                    break;
                case /* uint32 Unk3300_LPHALOGLGAL = 9 [json_name = "Unk3300LPHALOGLGAL"];*/ 9:
                    message.unk3300LPHALOGLGAL = reader.uint32();
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_AIINHBHNHOI = 11 [json_name = "Unk3300AIINHBHNHOI"]; */
        if (message.unk3300AIINHBHNHOI !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300AIINHBHNHOI);
        /* uint32 add_progress = 5; */
        if (message.addProgress !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.addProgress);
        /* uint32 Unk3300_LPHALOGLGAL = 9 [json_name = "Unk3300LPHALOGLGAL"]; */
        if (message.unk3300LPHALOGLGAL !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300LPHALOGLGAL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampContributeItemRsp
 */
exports.SeaLampContributeItemRsp = new SeaLampContributeItemRsp$Type();
