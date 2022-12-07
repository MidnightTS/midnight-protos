"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAranaraCollectionNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AranaraCollectionState_1 = require("./AranaraCollectionState");
// @generated message type with reflection information, may provide speed optimized methods
class AddAranaraCollectionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AddAranaraCollectionNotify", [
            { no: 10, name: "Unk3300_NJLJBBMJLBK", kind: "enum", jsonName: "Unk3300NJLJBBMJLBK", T: () => ["AranaraCollectionState", AranaraCollectionState_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] },
            { no: 7, name: "collection_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_AFBIBLNKCOD", kind: "enum", jsonName: "Unk3300AFBIBLNKCOD", T: () => ["AranaraCollectionState", AranaraCollectionState_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] },
            { no: 2, name: "collection_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300NJLJBBMJLBK: 0, collectionId: 0, unk3300AFBIBLNKCOD: 0, collectionType: 0 };
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
                case /* AranaraCollectionState Unk3300_NJLJBBMJLBK = 10 [json_name = "Unk3300NJLJBBMJLBK"];*/ 10:
                    message.unk3300NJLJBBMJLBK = reader.int32();
                    break;
                case /* uint32 collection_id */ 7:
                    message.collectionId = reader.uint32();
                    break;
                case /* AranaraCollectionState Unk3300_AFBIBLNKCOD = 4 [json_name = "Unk3300AFBIBLNKCOD"];*/ 4:
                    message.unk3300AFBIBLNKCOD = reader.int32();
                    break;
                case /* uint32 collection_type */ 2:
                    message.collectionType = reader.uint32();
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
        /* AranaraCollectionState Unk3300_NJLJBBMJLBK = 10 [json_name = "Unk3300NJLJBBMJLBK"]; */
        if (message.unk3300NJLJBBMJLBK !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.unk3300NJLJBBMJLBK);
        /* uint32 collection_id = 7; */
        if (message.collectionId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.collectionId);
        /* AranaraCollectionState Unk3300_AFBIBLNKCOD = 4 [json_name = "Unk3300AFBIBLNKCOD"]; */
        if (message.unk3300AFBIBLNKCOD !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.unk3300AFBIBLNKCOD);
        /* uint32 collection_type = 2; */
        if (message.collectionType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.collectionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AddAranaraCollectionNotify
 */
exports.AddAranaraCollectionNotify = new AddAranaraCollectionNotify$Type();
