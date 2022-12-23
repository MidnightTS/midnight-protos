"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetUpdateExtraCDRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetExtraCdType_1 = require("./WidgetExtraCdType");
const WidgetCoolDownData_1 = require("./WidgetCoolDownData");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUpdateExtraCDRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetUpdateExtraCDRsp", [
            { no: 10, name: "cool_data", kind: "message", T: () => WidgetCoolDownData_1.WidgetCoolDownData },
            { no: 5, name: "extra_cd_type", kind: "enum", T: () => ["WidgetExtraCdType", WidgetExtraCdType_1.WidgetExtraCdType, "WIDGET_EXTRA_CD_TYPE_"] },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "cd_group", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { extraCdType: 0, retcode: 0, cdGroup: 0, materialId: 0 };
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
                case /* WidgetCoolDownData cool_data */ 10:
                    message.coolData = WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options, message.coolData);
                    break;
                case /* WidgetExtraCdType extra_cd_type */ 5:
                    message.extraCdType = reader.int32();
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cd_group */ 11:
                    message.cdGroup = reader.uint32();
                    break;
                case /* uint32 material_id */ 7:
                    message.materialId = reader.uint32();
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
        /* WidgetCoolDownData cool_data = 10; */
        if (message.coolData)
            WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryWrite(message.coolData, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WidgetExtraCdType extra_cd_type = 5; */
        if (message.extraCdType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.extraCdType);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 cd_group = 11; */
        if (message.cdGroup !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cdGroup);
        /* uint32 material_id = 7; */
        if (message.materialId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetUpdateExtraCDRsp
 */
exports.WidgetUpdateExtraCDRsp = new WidgetUpdateExtraCDRsp$Type();
