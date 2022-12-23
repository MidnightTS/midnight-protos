"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionPrivilegeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionPrivilegeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionPrivilegeInfo", [
            { no: 14, name: "Unk3300_GJBEAFPMFAA", kind: "scalar", jsonName: "Unk3300GJBEAFPMFAA", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "privilege_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_ALOLACFGMHI", kind: "scalar", jsonName: "Unk3300ALOLACFGMHI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GJBEAFPMFAA: 0, privilegeId: 0, unk3300ALOLACFGMHI: 0 };
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
                case /* uint32 Unk3300_GJBEAFPMFAA = 14 [json_name = "Unk3300GJBEAFPMFAA"];*/ 14:
                    message.unk3300GJBEAFPMFAA = reader.uint32();
                    break;
                case /* uint32 privilege_id */ 2:
                    message.privilegeId = reader.uint32();
                    break;
                case /* uint32 Unk3300_ALOLACFGMHI = 1 [json_name = "Unk3300ALOLACFGMHI"];*/ 1:
                    message.unk3300ALOLACFGMHI = reader.uint32();
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
        /* uint32 Unk3300_GJBEAFPMFAA = 14 [json_name = "Unk3300GJBEAFPMFAA"]; */
        if (message.unk3300GJBEAFPMFAA !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300GJBEAFPMFAA);
        /* uint32 privilege_id = 2; */
        if (message.privilegeId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.privilegeId);
        /* uint32 Unk3300_ALOLACFGMHI = 1 [json_name = "Unk3300ALOLACFGMHI"]; */
        if (message.unk3300ALOLACFGMHI !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300ALOLACFGMHI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionPrivilegeInfo
 */
exports.ReunionPrivilegeInfo = new ReunionPrivilegeInfo$Type();
