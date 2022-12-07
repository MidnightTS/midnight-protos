"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetChangeLevelTagReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomGadgetTreeInfo_1 = require("./CustomGadgetTreeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChangeLevelTagReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetChangeLevelTagReq", [
            { no: 14, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "level_tag_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "combination_info", kind: "message", T: () => CustomGadgetTreeInfo_1.CustomGadgetTreeInfo }
        ]);
    }
    create(value) {
        const message = { gadgetEntityId: 0, levelTagId: 0 };
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
                case /* uint32 gadget_entity_id */ 14:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 level_tag_id */ 6:
                    message.levelTagId = reader.uint32();
                    break;
                case /* CustomGadgetTreeInfo combination_info */ 7:
                    message.combinationInfo = CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.combinationInfo);
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
        /* uint32 gadget_entity_id = 14; */
        if (message.gadgetEntityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 level_tag_id = 6; */
        if (message.levelTagId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.levelTagId);
        /* CustomGadgetTreeInfo combination_info = 7; */
        if (message.combinationInfo)
            CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryWrite(message.combinationInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetChangeLevelTagReq
 */
exports.GadgetChangeLevelTagReq = new GadgetChangeLevelTagReq$Type();
