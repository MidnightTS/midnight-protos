"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateInferenceWordReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AssociateInferenceWordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AssociateInferenceWordReq", [
            { no: 6, name: "page_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EPMGHELECNH", kind: "scalar", jsonName: "Unk3300EPMGHELECNH", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_FDGLBLJOKOK", kind: "scalar", jsonName: "Unk3300FDGLBLJOKOK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pageId: 0, unk3300EPMGHELECNH: 0, unk3300FDGLBLJOKOK: 0 };
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
                case /* uint32 page_id */ 6:
                    message.pageId = reader.uint32();
                    break;
                case /* uint32 Unk3300_EPMGHELECNH = 2 [json_name = "Unk3300EPMGHELECNH"];*/ 2:
                    message.unk3300EPMGHELECNH = reader.uint32();
                    break;
                case /* uint32 Unk3300_FDGLBLJOKOK = 4 [json_name = "Unk3300FDGLBLJOKOK"];*/ 4:
                    message.unk3300FDGLBLJOKOK = reader.uint32();
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
        /* uint32 page_id = 6; */
        if (message.pageId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pageId);
        /* uint32 Unk3300_EPMGHELECNH = 2 [json_name = "Unk3300EPMGHELECNH"]; */
        if (message.unk3300EPMGHELECNH !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EPMGHELECNH);
        /* uint32 Unk3300_FDGLBLJOKOK = 4 [json_name = "Unk3300FDGLBLJOKOK"]; */
        if (message.unk3300FDGLBLJOKOK !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300FDGLBLJOKOK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AssociateInferenceWordReq
 */
exports.AssociateInferenceWordReq = new AssociateInferenceWordReq$Type();
