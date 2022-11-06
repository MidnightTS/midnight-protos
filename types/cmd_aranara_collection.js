"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataLogNewFinishedGlobalWatcherNotify = exports.CataLogFinishedGlobalWatcherAllDataNotify = exports.CataLogGlobalWatcherFinishedData = exports.AddAranaraCollectionNotify = exports.AranaraCollectionDataNotify = exports.AranaraCollectionSuite = exports.CataLogNewFinishedGlobalWatcherNotify_CmdId = exports.CataLogFinishedGlobalWatcherAllDataNotify_CmdId = exports.AddAranaraCollectionNotify_CmdId = exports.AranaraCollectionDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.AranaraCollectionDataNotify.CmdId
 */
var AranaraCollectionDataNotify_CmdId;
(function (AranaraCollectionDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AranaraCollectionDataNotify_CmdId[AranaraCollectionDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6376;
     */
    AranaraCollectionDataNotify_CmdId[AranaraCollectionDataNotify_CmdId["CMD_ID"] = 6376] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AranaraCollectionDataNotify_CmdId[AranaraCollectionDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AranaraCollectionDataNotify_CmdId[AranaraCollectionDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AranaraCollectionDataNotify_CmdId = exports.AranaraCollectionDataNotify_CmdId || (exports.AranaraCollectionDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddAranaraCollectionNotify.CmdId
 */
var AddAranaraCollectionNotify_CmdId;
(function (AddAranaraCollectionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddAranaraCollectionNotify_CmdId[AddAranaraCollectionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6368;
     */
    AddAranaraCollectionNotify_CmdId[AddAranaraCollectionNotify_CmdId["CMD_ID"] = 6368] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddAranaraCollectionNotify_CmdId[AddAranaraCollectionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddAranaraCollectionNotify_CmdId[AddAranaraCollectionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddAranaraCollectionNotify_CmdId = exports.AddAranaraCollectionNotify_CmdId || (exports.AddAranaraCollectionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CataLogFinishedGlobalWatcherAllDataNotify.CmdId
 */
var CataLogFinishedGlobalWatcherAllDataNotify_CmdId;
(function (CataLogFinishedGlobalWatcherAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CataLogFinishedGlobalWatcherAllDataNotify_CmdId[CataLogFinishedGlobalWatcherAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6370;
     */
    CataLogFinishedGlobalWatcherAllDataNotify_CmdId[CataLogFinishedGlobalWatcherAllDataNotify_CmdId["CMD_ID"] = 6370] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CataLogFinishedGlobalWatcherAllDataNotify_CmdId[CataLogFinishedGlobalWatcherAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CataLogFinishedGlobalWatcherAllDataNotify_CmdId[CataLogFinishedGlobalWatcherAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CataLogFinishedGlobalWatcherAllDataNotify_CmdId = exports.CataLogFinishedGlobalWatcherAllDataNotify_CmdId || (exports.CataLogFinishedGlobalWatcherAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CataLogNewFinishedGlobalWatcherNotify.CmdId
 */
var CataLogNewFinishedGlobalWatcherNotify_CmdId;
(function (CataLogNewFinishedGlobalWatcherNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CataLogNewFinishedGlobalWatcherNotify_CmdId[CataLogNewFinishedGlobalWatcherNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6395;
     */
    CataLogNewFinishedGlobalWatcherNotify_CmdId[CataLogNewFinishedGlobalWatcherNotify_CmdId["CMD_ID"] = 6395] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CataLogNewFinishedGlobalWatcherNotify_CmdId[CataLogNewFinishedGlobalWatcherNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CataLogNewFinishedGlobalWatcherNotify_CmdId[CataLogNewFinishedGlobalWatcherNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CataLogNewFinishedGlobalWatcherNotify_CmdId = exports.CataLogNewFinishedGlobalWatcherNotify_CmdId || (exports.CataLogNewFinishedGlobalWatcherNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AranaraCollectionSuite$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AranaraCollectionSuite", [
            { no: 6, name: "collection_id_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["com.midnights.game.AranaraCollectionState", define_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] } },
            { no: 12, name: "collection_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { collectionIdStateMap: {} };
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
                case /* map<uint32, com.midnights.game.AranaraCollectionState> collection_id_state_map */ 6:
                    this.binaryReadMap6(message.collectionIdStateMap, reader, options);
                    break;
                case /* optional uint32 collection_type */ 12:
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AranaraCollectionSuite.collection_id_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.AranaraCollectionState> collection_id_state_map = 6; */
        for (let k of Object.keys(message.collectionIdStateMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.collectionIdStateMap[k]).join();
        /* optional uint32 collection_type = 12; */
        if (message.collectionType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.collectionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AranaraCollectionSuite
 */
exports.AranaraCollectionSuite = new AranaraCollectionSuite$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AranaraCollectionDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AranaraCollectionDataNotify", [
            { no: 14, name: "collection_suite_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AranaraCollectionSuite }
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
                case /* repeated com.midnights.game.AranaraCollectionSuite collection_suite_list */ 14:
                    message.collectionSuiteList.push(exports.AranaraCollectionSuite.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.AranaraCollectionSuite collection_suite_list = 14; */
        for (let i = 0; i < message.collectionSuiteList.length; i++)
            exports.AranaraCollectionSuite.internalBinaryWrite(message.collectionSuiteList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AranaraCollectionDataNotify
 */
exports.AranaraCollectionDataNotify = new AranaraCollectionDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddAranaraCollectionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddAranaraCollectionNotify", [
            { no: 7, name: "collection_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "target_state", kind: "enum", opt: true, T: () => ["com.midnights.game.AranaraCollectionState", define_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] },
            { no: 15, name: "from_state", kind: "enum", opt: true, T: () => ["com.midnights.game.AranaraCollectionState", define_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] },
            { no: 8, name: "collection_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 collection_type */ 7:
                    message.collectionType = reader.uint32();
                    break;
                case /* optional com.midnights.game.AranaraCollectionState target_state */ 12:
                    message.targetState = reader.int32();
                    break;
                case /* optional com.midnights.game.AranaraCollectionState from_state */ 15:
                    message.fromState = reader.int32();
                    break;
                case /* optional uint32 collection_id */ 8:
                    message.collectionId = reader.uint32();
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
        /* optional uint32 collection_type = 7; */
        if (message.collectionType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.collectionType);
        /* optional com.midnights.game.AranaraCollectionState target_state = 12; */
        if (message.targetState !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.targetState);
        /* optional com.midnights.game.AranaraCollectionState from_state = 15; */
        if (message.fromState !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.fromState);
        /* optional uint32 collection_id = 8; */
        if (message.collectionId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.collectionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddAranaraCollectionNotify
 */
exports.AddAranaraCollectionNotify = new AddAranaraCollectionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CataLogGlobalWatcherFinishedData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CataLogGlobalWatcherFinishedData", [
            { no: 8, name: "finished_global_watcher_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "catalog_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedGlobalWatcherList: [] };
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
                case /* repeated uint32 finished_global_watcher_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedGlobalWatcherList.push(reader.uint32());
                    else
                        message.finishedGlobalWatcherList.push(reader.uint32());
                    break;
                case /* optional uint32 catalog_type */ 13:
                    message.catalogType = reader.uint32();
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
        /* repeated uint32 finished_global_watcher_list = 8; */
        for (let i = 0; i < message.finishedGlobalWatcherList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.finishedGlobalWatcherList[i]);
        /* optional uint32 catalog_type = 13; */
        if (message.catalogType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.catalogType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CataLogGlobalWatcherFinishedData
 */
exports.CataLogGlobalWatcherFinishedData = new CataLogGlobalWatcherFinishedData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CataLogFinishedGlobalWatcherAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CataLogFinishedGlobalWatcherAllDataNotify", [
            { no: 13, name: "finished_global_watcher_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CataLogGlobalWatcherFinishedData }
        ]);
    }
    create(value) {
        const message = { finishedGlobalWatcherDataList: [] };
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
                case /* repeated com.midnights.game.CataLogGlobalWatcherFinishedData finished_global_watcher_data_list */ 13:
                    message.finishedGlobalWatcherDataList.push(exports.CataLogGlobalWatcherFinishedData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CataLogGlobalWatcherFinishedData finished_global_watcher_data_list = 13; */
        for (let i = 0; i < message.finishedGlobalWatcherDataList.length; i++)
            exports.CataLogGlobalWatcherFinishedData.internalBinaryWrite(message.finishedGlobalWatcherDataList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CataLogFinishedGlobalWatcherAllDataNotify
 */
exports.CataLogFinishedGlobalWatcherAllDataNotify = new CataLogFinishedGlobalWatcherAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CataLogNewFinishedGlobalWatcherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CataLogNewFinishedGlobalWatcherNotify", [
            { no: 2, name: "new_finished_global_watcher_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CataLogGlobalWatcherFinishedData }
        ]);
    }
    create(value) {
        const message = { newFinishedGlobalWatcherDataList: [] };
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
                case /* repeated com.midnights.game.CataLogGlobalWatcherFinishedData new_finished_global_watcher_data_list */ 2:
                    message.newFinishedGlobalWatcherDataList.push(exports.CataLogGlobalWatcherFinishedData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CataLogGlobalWatcherFinishedData new_finished_global_watcher_data_list = 2; */
        for (let i = 0; i < message.newFinishedGlobalWatcherDataList.length; i++)
            exports.CataLogGlobalWatcherFinishedData.internalBinaryWrite(message.newFinishedGlobalWatcherDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CataLogNewFinishedGlobalWatcherNotify
 */
exports.CataLogNewFinishedGlobalWatcherNotify = new CataLogNewFinishedGlobalWatcherNotify$Type();
