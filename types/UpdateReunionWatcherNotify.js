"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReunionWatcherNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReunionWatcherInfo_1 = require("./ReunionWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class UpdateReunionWatcherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("UpdateReunionWatcherNotify", [
            { no: 12, name: "watcher_info", kind: "message", T: () => ReunionWatcherInfo_1.ReunionWatcherInfo },
            { no: 14, name: "mission_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { missionId: 0 };
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
                case /* ReunionWatcherInfo watcher_info */ 12:
                    message.watcherInfo = ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options, message.watcherInfo);
                    break;
                case /* uint32 mission_id */ 14:
                    message.missionId = reader.uint32();
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
        /* ReunionWatcherInfo watcher_info = 12; */
        if (message.watcherInfo)
            ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryWrite(message.watcherInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 mission_id = 14; */
        if (message.missionId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.missionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateReunionWatcherNotify
 */
exports.UpdateReunionWatcherNotify = new UpdateReunionWatcherNotify$Type();
