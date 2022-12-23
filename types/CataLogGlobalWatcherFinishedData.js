"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataLogGlobalWatcherFinishedData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CataLogGlobalWatcherFinishedData$Type extends runtime_5.MessageType {
    constructor() {
        super("CataLogGlobalWatcherFinishedData", [
            { no: 15, name: "finished_global_watcher_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "catalog_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedGlobalWatcherList: [], catalogType: 0 };
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
                case /* repeated uint32 finished_global_watcher_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedGlobalWatcherList.push(reader.uint32());
                    else
                        message.finishedGlobalWatcherList.push(reader.uint32());
                    break;
                case /* uint32 catalog_type */ 2:
                    message.catalogType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 finished_global_watcher_list = 15; */
        if (message.finishedGlobalWatcherList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedGlobalWatcherList.length; i++)
                writer.uint32(message.finishedGlobalWatcherList[i]);
            writer.join();
        }
        /* uint32 catalog_type = 2; */
        if (message.catalogType !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.catalogType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CataLogGlobalWatcherFinishedData
 */
exports.CataLogGlobalWatcherFinishedData = new CataLogGlobalWatcherFinishedData$Type();
