"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranaraCollectionDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AranaraCollectionSuite_1 = require("./AranaraCollectionSuite");
// @generated message type with reflection information, may provide speed optimized methods
class AranaraCollectionDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AranaraCollectionDataNotify", [
            { no: 15, name: "collection_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AranaraCollectionSuite_1.AranaraCollectionSuite }
        ]);
    }
    create(value) {
        const message = { collectionSuiteList: [] };
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
                case /* repeated AranaraCollectionSuite collection_suite_list */ 15:
                    message.collectionSuiteList.push(AranaraCollectionSuite_1.AranaraCollectionSuite.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated AranaraCollectionSuite collection_suite_list = 15; */
        for (let i = 0; i < message.collectionSuiteList.length; i++)
            AranaraCollectionSuite_1.AranaraCollectionSuite.internalBinaryWrite(message.collectionSuiteList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AranaraCollectionDataNotify
 */
exports.AranaraCollectionDataNotify = new AranaraCollectionDataNotify$Type();
