"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SpiceStageData_1 = require("./SpiceStageData");
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SpiceActivityDetailInfo", [
            { no: 14, name: "Unk3300_CIHIAJEGCBO", kind: "scalar", jsonName: "Unk3300CIHIAJEGCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_LAKPMMIPBMI", kind: "scalar", jsonName: "Unk3300LAKPMMIPBMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "spice_stage_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SpiceStageData_1.SpiceStageData }
        ]);
    }
    create(value) {
        const message = { unk3300CIHIAJEGCBO: 0, unk3300LAKPMMIPBMI: 0, spiceStageDataList: [] };
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
                case /* uint32 Unk3300_CIHIAJEGCBO = 14 [json_name = "Unk3300CIHIAJEGCBO"];*/ 14:
                    message.unk3300CIHIAJEGCBO = reader.uint32();
                    break;
                case /* uint32 Unk3300_LAKPMMIPBMI = 8 [json_name = "Unk3300LAKPMMIPBMI"];*/ 8:
                    message.unk3300LAKPMMIPBMI = reader.uint32();
                    break;
                case /* repeated SpiceStageData spice_stage_data_list */ 6:
                    message.spiceStageDataList.push(SpiceStageData_1.SpiceStageData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 Unk3300_CIHIAJEGCBO = 14 [json_name = "Unk3300CIHIAJEGCBO"]; */
        if (message.unk3300CIHIAJEGCBO !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300CIHIAJEGCBO);
        /* uint32 Unk3300_LAKPMMIPBMI = 8 [json_name = "Unk3300LAKPMMIPBMI"]; */
        if (message.unk3300LAKPMMIPBMI !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LAKPMMIPBMI);
        /* repeated SpiceStageData spice_stage_data_list = 6; */
        for (let i = 0; i < message.spiceStageDataList.length; i++)
            SpiceStageData_1.SpiceStageData.internalBinaryWrite(message.spiceStageDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityDetailInfo
 */
exports.SpiceActivityDetailInfo = new SpiceActivityDetailInfo$Type();
