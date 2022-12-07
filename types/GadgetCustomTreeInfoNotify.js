"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetCustomTreeInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomGadgetTreeInfo_1 = require("./CustomGadgetTreeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetCustomTreeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetCustomTreeInfoNotify", [
            { no: 8, name: "custom_gadget_tree_info", kind: "message", T: () => CustomGadgetTreeInfo_1.CustomGadgetTreeInfo },
            { no: 7, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gadgetEntityId: 0 };
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
                case /* CustomGadgetTreeInfo custom_gadget_tree_info */ 8:
                    message.customGadgetTreeInfo = CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.customGadgetTreeInfo);
                    break;
                case /* uint32 gadget_entity_id */ 7:
                    message.gadgetEntityId = reader.uint32();
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
        /* CustomGadgetTreeInfo custom_gadget_tree_info = 8; */
        if (message.customGadgetTreeInfo)
            CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryWrite(message.customGadgetTreeInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gadget_entity_id = 7; */
        if (message.gadgetEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetCustomTreeInfoNotify
 */
exports.GadgetCustomTreeInfoNotify = new GadgetCustomTreeInfoNotify$Type();
