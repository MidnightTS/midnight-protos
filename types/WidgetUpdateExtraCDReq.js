"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetUpdateExtraCDReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetExtraCdType_1 = require("./WidgetExtraCdType");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUpdateExtraCDReq$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetUpdateExtraCDReq", [
            { no: 6, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "extra_cd_type", kind: "enum", T: () => ["WidgetExtraCdType", WidgetExtraCdType_1.WidgetExtraCdType, "WIDGET_EXTRA_CD_TYPE_"] },
            { no: 14, name: "cd_group", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { materialId: 0, extraCdType: 0, cdGroup: 0 };
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
                case /* uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                case /* WidgetExtraCdType extra_cd_type */ 7:
                    message.extraCdType = reader.int32();
                    break;
                case /* uint32 cd_group */ 14:
                    message.cdGroup = reader.uint32();
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
        /* uint32 material_id = 6; */
        if (message.materialId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.materialId);
        /* WidgetExtraCdType extra_cd_type = 7; */
        if (message.extraCdType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.extraCdType);
        /* uint32 cd_group = 14; */
        if (message.cdGroup !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cdGroup);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetUpdateExtraCDReq
 */
exports.WidgetUpdateExtraCDReq = new WidgetUpdateExtraCDReq$Type();
