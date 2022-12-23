"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailItem = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MaterialDeleteInfo_1 = require("./MaterialDeleteInfo");
const EquipParam_1 = require("./EquipParam");
// @generated message type with reflection information, may provide speed optimized methods
class MailItem$Type extends runtime_5.MessageType {
    constructor() {
        super("MailItem", [
            { no: 1, name: "equip_param", kind: "message", T: () => EquipParam_1.EquipParam },
            { no: 2, name: "delete_info", kind: "message", T: () => MaterialDeleteInfo_1.MaterialDeleteInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* EquipParam equip_param */ 1:
                    message.equipParam = EquipParam_1.EquipParam.internalBinaryRead(reader, reader.uint32(), options, message.equipParam);
                    break;
                case /* MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = MaterialDeleteInfo_1.MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
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
        /* EquipParam equip_param = 1; */
        if (message.equipParam)
            EquipParam_1.EquipParam.internalBinaryWrite(message.equipParam, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            MaterialDeleteInfo_1.MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MailItem
 */
exports.MailItem = new MailItem$Type();
