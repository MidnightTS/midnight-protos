"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetReportReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetReportReq$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetReportReq", [
            { no: 8, name: "weather_wizard_shield_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_APDFKKNKIJJ", kind: "scalar", jsonName: "Unk3300APDFKKNKIJJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_BCAIBKDIHHF", kind: "scalar", jsonName: "Unk3300BCAIBKDIHHF", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_clear_sky_crystal_hint", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { weatherWizardShieldValue: 0, unk3300APDFKKNKIJJ: false, unk3300BCAIBKDIHHF: false, materialId: 0, isClearSkyCrystalHint: false };
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
                case /* uint32 weather_wizard_shield_value */ 8:
                    message.weatherWizardShieldValue = reader.uint32();
                    break;
                case /* bool Unk3300_APDFKKNKIJJ = 7 [json_name = "Unk3300APDFKKNKIJJ"];*/ 7:
                    message.unk3300APDFKKNKIJJ = reader.bool();
                    break;
                case /* bool Unk3300_BCAIBKDIHHF = 6 [json_name = "Unk3300BCAIBKDIHHF"];*/ 6:
                    message.unk3300BCAIBKDIHHF = reader.bool();
                    break;
                case /* uint32 material_id */ 2:
                    message.materialId = reader.uint32();
                    break;
                case /* bool is_clear_sky_crystal_hint */ 14:
                    message.isClearSkyCrystalHint = reader.bool();
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
        /* uint32 weather_wizard_shield_value = 8; */
        if (message.weatherWizardShieldValue !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.weatherWizardShieldValue);
        /* bool Unk3300_APDFKKNKIJJ = 7 [json_name = "Unk3300APDFKKNKIJJ"]; */
        if (message.unk3300APDFKKNKIJJ !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300APDFKKNKIJJ);
        /* bool Unk3300_BCAIBKDIHHF = 6 [json_name = "Unk3300BCAIBKDIHHF"]; */
        if (message.unk3300BCAIBKDIHHF !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300BCAIBKDIHHF);
        /* uint32 material_id = 2; */
        if (message.materialId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.materialId);
        /* bool is_clear_sky_crystal_hint = 14; */
        if (message.isClearSkyCrystalHint !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isClearSkyCrystalHint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetReportReq
 */
exports.WidgetReportReq = new WidgetReportReq$Type();
