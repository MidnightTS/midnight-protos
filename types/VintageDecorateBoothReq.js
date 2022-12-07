"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageDecorateBoothReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomGadgetTreeInfo_1 = require("./CustomGadgetTreeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class VintageDecorateBoothReq$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageDecorateBoothReq", [
            { no: 13, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "combination_info", kind: "message", T: () => CustomGadgetTreeInfo_1.CustomGadgetTreeInfo }
        ]);
    }
    create(value) {
        const message = { entityId: 0 };
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
                case /* uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* CustomGadgetTreeInfo combination_info */ 5:
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
        /* uint32 entity_id = 13; */
        if (message.entityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* CustomGadgetTreeInfo combination_info = 5; */
        if (message.combinationInfo)
            CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryWrite(message.combinationInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageDecorateBoothReq
 */
exports.VintageDecorateBoothReq = new VintageDecorateBoothReq$Type();
